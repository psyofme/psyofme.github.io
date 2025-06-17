source "https://rubygems.org"

gem "jekyll", "~> 4.3.0"
gem "webrick", "~> 1.7"
gem "nokogiri", "~> 1.15"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-archives", "~> 2.2"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
  gem "http_parser.rb", "~> 0.6.0"  # Lock to v0.6.x for JRuby compatibility
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]