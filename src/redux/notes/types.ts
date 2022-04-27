export interface INote {
  id: string
  name: string
  created: string
  category: 'Task' | 'Random Thought' | 'Idea'
  content: string
  dates: string[] | []
  completed: boolean
}
