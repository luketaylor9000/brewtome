class BreweriesService
  
  def self.get_breweries_by_city(search)
    url = "https://api.openbrewerydb.org/breweries?by_city=#{search}"
    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)
  end

  def self.get_brewery(brewery)
    url = "https://api.openbrewerydb.org/breweries/#{brewery}"
    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)
  end

end
