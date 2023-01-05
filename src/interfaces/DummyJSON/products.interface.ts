import { DummyJsonProduct } from "./product.interface"

export interface DummyJSONProducts {
  products: DummyJsonProduct[]
  total: number
  skip: number
  limit: number
}
