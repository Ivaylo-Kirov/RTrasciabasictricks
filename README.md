// init notes:  
App > renders Table and Form  
Table renders table head and table body  
Form has name/job state and fields  
  
App contains name/job objects in state and flows down to Table and from there to Table Body  
App contains removeCharacter and insertCharacter which modifies state  
  
Table just splits into two and passes props down to Table Body  
Table Body maps through its props and displays them  
Table Body contains Delete button, which passes desired index all the way to App  
  
* Tricks:  
- adding another object to existing state (i.e. add new character)  
'''
this.setState({data: [...this.state.data, character]})
'''

- remove character from state based on index using filter    
'''
const newCharacters = this.state.data.filter((char, i) => i != index))
'''

