# 1: Use node 8 as base:
FROM node:8-alpine

# 2: We'll set the application path as the working directory
WORKDIR /usr/src

# 3: We'll add the app's binaries path to $PATH and set the $HOME to the app folder:
ENV HOME=/usr/src PATH=/usr/src/bin:$PATH

# 4: Install yarn and ember-cli:
RUN set -ex && apk add --no-cache yarn && npm install -g ember-cli

# From this point on, we'll deviate from the deployable Dockerfile's builder image:

# 5: Install Chromium to run browser tests in the container, and the npm check-dependencies package:
RUN set -ex && apk add --no-cache chromium && npm install -g check-dependencies

# 6: Install jq, pup & watchman:
RUN set -ex \
  && apk update \
  && apk add ca-certificates wget \
  && update-ca-certificates \
  && apk add --no-cache jq \
  && apk add --no-cache --virtual .build-deps ca-certificates openssl automake autoconf linux-headers build-base python-dev \
  && cd /tmp \
  && export PUP_VERSION=0.4.0 \
  && export PUP_SHA256=ec3d29e9fb375b87ac492c8b546ad6be84b0c0b49dab7ff4c6b582eac71ba01c \
  && wget -O pup.zip "https://github.com/ericchiang/pup/releases/download/v${PUP_VERSION}/pup_v${PUP_VERSION}_linux_amd64.zip" \
  && echo "$PUP_SHA256 *pup.zip" | sha256sum -c - \
  && unzip pup.zip -d /usr/bin \
  && export WATCHMAN_VERSION=4.7.0 \
  && export WATCHMAN_SHA256=77c7174c59d6be5e17382e414db4907a298ca187747c7fcb2ceb44da3962c6bf \
  && wget -O watchman.tar.gz "https://github.com/facebook/watchman/archive/v${WATCHMAN_VERSION}.tar.gz" \
  && echo "$WATCHMAN_SHA256 *watchman.tar.gz" | sha256sum -c - \
  && tar -xz -f watchman.tar.gz -C /tmp/ \
  && cd /tmp/watchman-${WATCHMAN_VERSION} \
  && ./autogen.sh \
  && ./configure --enable-lenient \
  && make \
  && make install \
  && apk del .build-deps \
  && cd $HOME \
  && rm -rf /tmp/*

# 7: Expose the app and live-reload ports:
EXPOSE 4200 35730

# 8: Set the default command:
CMD ["ember", "server", "--live-reload-port", "35730"]
