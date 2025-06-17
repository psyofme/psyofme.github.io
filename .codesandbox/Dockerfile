FROM node:18-bullseye

# Update package list and install Ruby dependencies
RUN apt-get update && apt-get install -y \
    ruby-full \
    build-essential \
    zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Bundler gem
RUN gem install bundler

# Add Ruby gem executables to PATH
ENV PATH="/usr/local/bundle/bin:/var/lib/gems/3.0.0/bin:${PATH}"