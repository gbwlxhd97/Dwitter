export default class TweetService {
  
  constructor(baseUrl){
    this.baseUrl = baseUrl
  }
  async getTweets(username) {
    const query = username ? `?username=${username}22` : '없음';
    const response = await fetch(`${this.baseUrl}/tweets${query}`,{
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    const data = await response.json();
    if(response.status !==200) {
      throw new Error(data.message)
    }
    return data;
  }

  async postTweet(text) {
    
    const response = await fetch(`${this.baseUrl}/tweets`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ text, username: 'hi', name: 'h2'})
    });
    const data = await response.json();
    if(response.status !==201) {
      throw new Error(data.message)
    }
    return data;
  }

  async deleteTweet(tweetId) {
    const response = await fetch(`${this.baseUrl}/tweets${tweetId}`,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    });
    
    if(response.status !==204) {
      throw new Error()
    }
  }

  async updateTweet(tweetId, text) {
    const response = await fetch(`${this.baseUrl}/tweets/${tweetId}`,{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({text})
    });
    const data = await response.json();
    if(response.status !==200) {
      throw new Error(data.message)
    }
    return data;
  }
}
