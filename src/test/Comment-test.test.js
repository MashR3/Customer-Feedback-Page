import Enzyme from 'enzyme';
import Comment from '../components/Comment';

const { shallow } = Enzyme; //whatever you want to use here

let data = [
  {
    id: 5,
    name: 'Max Dennings',
    email: 'denny-131311@yahoo.com',
    rating: 1,
    comment: '',
    dateObject: {
      day: 12,
      month: 3,
      year: 2021,
    },
  },
  {
    id: 6,
    name: 'Faouzia Factor',
    email: 'minefields191@yahoo.com',
    rating: 5,
    comment:
      'Adore the concept of not having headphones when I pay for headphones!',
    dateObject: {
      day: 15,
      month: 2,
      year: 2021,
    },
  },
];

describe('<Comment /> component', () => {
  const wrapper = shallow(<Comment comment={data[0]} />);
  const wrapper2 = shallow(<Comment comment={data[1]} />);

  test('Comment has correct text: name', () => {
    expect(wrapper.text()).toContain('Max Dennings');
    expect(wrapper2.text()).toContain('Faouzia Factor');
  });

  test('Comment displays "Reviewed on" text', () => {
    expect(wrapper.text()).toContain('Reviewed on');
  });

  test('Comment contains date in card', () => {
    expect(wrapper.text()).toContain('12/3/2021');
  });

  it('renders a `usericon`', () => {
    expect(wrapper.find('.usericon')).toHaveLength(1);
    expect(wrapper2.find('.usericon')).toHaveLength(1);
  });

  it('renders `staricon` stars to match the comment rating', () => {
    expect(wrapper.find('.staricon')).toHaveLength(1);
    expect(wrapper2.find('.staricon')).toHaveLength(5);
  });

  it('renders the comment text if present', () => {
    expect(wrapper.find('#comment-5')).toHaveLength(0); // No comment in the object, just a rating
    expect(wrapper2.find('#comment-6')).toHaveLength(1); // Contains a comment
  });

});
