import { validate as uuidValidate } from 'uuid';
import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('Abstract Entity unit tests', () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 2 };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  });
  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 2 };
    const id = '3b3ac5b1-d240-4227-ba1f-99ceb0ef711c';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  });
  it('Should convert a entity to a JavaScript object', () => {
    const props = { prop1: 'value1', prop2: 2 };
    const id = '3b3ac5b1-d240-4227-ba1f-99ceb0ef711c';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});
