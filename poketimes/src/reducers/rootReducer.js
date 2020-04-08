const initState = {
  posts:[
    {
      id: '1', title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto qui est esse'
    },
    {
      id: '2', title: 'qui est esse', body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
    },
    {
      id: '3', title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'
    },
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST'){
    let newposts = state.posts.filter(post => post.id !== action.id)
    return {
      ...state,
      posts:newposts
    }
  }
  console.log(action);
  return {
    ...state
  };
}

export default rootReducer