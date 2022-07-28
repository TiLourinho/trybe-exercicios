interface IModel<T> {
  create(obj: T): Promise<T>,
  readOne(_id: string): Promise<T | null>,
  readAll(): Promise<T[] | null>,
  update(_id: string, obj: T): Promise<T | null>
  destroy(_id: string): Promise<T | null>
}

export default IModel;