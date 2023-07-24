import { faker } from '@faker-js/faker';
import { User, UserProps } from '../../user.entity';
describe('User Entity unit tests', () => {
  let props: UserProps;
  let sut: User;

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    sut = new User(props);
  });
  it('Constructor method', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.created_at).toBeInstanceOf(Date);
  });

  it('Get field name (toBe: DEFINED, EQUALS PROPS, TYPE OF string)', () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toBe('string');
  });

  it('Get field email (toBe: DEFINED, EQUALS PROPS, TYPE OF string)', () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toBe('string');
  });

  it('Get field password (toBe: DEFINED, EQUALS PROPS, TYPE OF string)', () => {
    expect(sut.props.password).toBeDefined();
    expect(sut.props.password).toEqual(props.password);
    expect(typeof sut.props.password).toBe('string');
  });

  it('Get field created_at (toBe: DEFINED, EQUALS PROPS, INSTANCE OF DATE)', () => {
    expect(sut.props.created_at).toBeDefined();
    expect(sut.props.created_at).toEqual(props.created_at);
    expect(sut.props.created_at).toBeInstanceOf(Date);
  });
});
