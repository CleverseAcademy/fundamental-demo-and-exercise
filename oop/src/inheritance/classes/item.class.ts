export class Item {
  constructor(private _ownerId: number, public readonly name: string) {}

  protected set ownerId(ownerId: number) {
    this._ownerId = ownerId
  }

  public get ownerId() {
    return this._ownerId
  }
}

