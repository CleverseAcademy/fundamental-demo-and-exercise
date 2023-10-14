export class Book {
  public static readonly KEY_RESET = 0
  constructor(
    public readonly title: string,
    public readonly ISBN: number,
    private _ownerId: number,
    private _price: number,
    private _key: number,
  ) {}

  public resetKey(key: number) {
    if (key === this._key) this._key = Book.KEY_RESET
  }

  public set key(key: number) {
    if (this._key === Book.KEY_RESET) this._key = key
    else throw new Error('Reset key before you set a new one')
  }

  public setOwnerId(key: number, ownerId: number): number {
    if (this._key === key) this._ownerId = ownerId
    else throw new Error('Key mismatch')
    return this._ownerId
  }

  public get ownerId() {
    return this._ownerId
  }

  public get price() {
    return this._price
  }

  public clone(): Book {
    return new Book(
      this.title,
      this.ISBN,
      this._ownerId,
      this._price,
      this._key
    )
  }
}

