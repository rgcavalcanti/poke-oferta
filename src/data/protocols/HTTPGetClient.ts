export abstract class HTTPGetClient<P, R> {
  constructor(protected url: string, protected params: P) { }

  abstract execute(): Promise<R>
}