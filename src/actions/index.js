let nextTodoId = 0

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL'
}
