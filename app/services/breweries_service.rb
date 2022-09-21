require "uri"
require "net/http"
# require "paperclip"
require 'base64'

class BreweriesService
  
  def self.get_breweries_by_city(search)
    url = "https://api.openbrewerydb.org/breweries?by_city=#{search}"
    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)
  end

  def self.get_breweries(search)
    url = "https://api.openbrewerydb.org/breweries/autocomplete?query=#{search}"
    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)
    # filtered_data = "15 responses"
    # parsed_response[0]
    #create method inside
    #return first 15 elements of the search response
    #then compare search to each one of the returned elements
    #if search === to the input then return just that
  end

  def self.get_brewery(brewery)
    url = "https://api.openbrewerydb.org/breweries/#{brewery}"
    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)
  end

  def self.get_brewery_logo(brewery_url)

    brewery_website = brewery_url.gsub('http://www.', '')

    url = URI("https://logo.clearbit.com/#{brewery_website}?size=200")
    https = Net::HTTP.new(url.host, url.port)
    https.use_ssl = true

    request = Net::HTTP::Get.new(url)
    
    response = https.request(request)

    png_json_data = response.body

    image_data = Base64.encode64(png_json_data)
    return image_data
  end

  def self.get_persisted_brewery(brewery_id)
    brewery = Brewery.find_by(obdb_id: brewery_id)
  end

  def self.create_brewery(brewery_id)
    brewery_json = get_brewery(brewery_id)

    # binding.pry
    brewery_url = brewery_json["website_url"]
    logo = get_brewery_logo(brewery_url)
    # binding.pry
    #write logo to assets/images
    IO.write("app/assets/images/brewery_logos/#{brewery_json["id"]}_logo.png", (Base64.decode64(logo)), {mode: 'wb'})

    new_brewery_params = brewery_json
    # new_brewery_params["logo"] = `app/assets/images/brewery_logos/#{brewery_json["id"]}_logo.png`
    new_brewery_params["obdb_id"] = brewery_id
    new_brewery_params["id"] = nil
    new_brewery_params["created_at"] = nil
    new_brewery_params["updated_at"] = nil
    brewery = Brewery.new(new_brewery_params)
    brewery.save
    return brewery
  end
  
end
