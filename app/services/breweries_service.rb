class BreweriesService
  def self.get_breweries(search)
    # url = "https://api.openbrewerydb.org/breweries/autocomplete?query=#{search}"
    url = "https://api.openbrewerydb.org/breweries?by_city=#{search}"
    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)
  end
end
