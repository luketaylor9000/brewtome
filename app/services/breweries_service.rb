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

end
