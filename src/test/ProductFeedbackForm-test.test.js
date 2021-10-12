import Enzyme from 'enzyme';
import ProductFeedbackForm from '../components/ProductFeedbackForm';

const { mount } = Enzyme;

describe('<ProductFeedbackForm /> component', () => {
  const wrapper = mount(<ProductFeedbackForm />);

  test('ProductFeedbackForm has title', () => {
    const title = <h3>Share your thoughts</h3>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  test('ProductFeedbackForm has form', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });

  test('ProductFeedbackForm has correct input length', () => {
    expect(wrapper.find('input')).toHaveLength(7); // name, email, 5 radio inputs
  });

  test('ProductFeedbackForm has correct textarea', () => {
    expect(wrapper.find('textarea')).toHaveLength(1);
  });

  test('ProductFeedbackForm finds star ratings', () => {
    expect(wrapper.find('StarRatings')).toHaveLength(1);
  });

  test('ProductFeedbackForm finds labels', () => {
    expect(wrapper.find('label')).toHaveLength(4);
  });

  test('ProductFeedbackForm has correct label text', () => {
    let label = wrapper.find('label');
    expect(label.at(0).text()).toEqual('Name');
    expect(label.at(1).text()).toEqual('Email');
    expect(label.at(2).text()).toEqual('Rating: 0 stars');
    expect(label.at(3).text()).toEqual('Comment');
  });

  test('ProductFeedbackForm finds button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').text()).toEqual('Submit Review');
  });

  it("validates form inputs as required", () => {;
    expect(wrapper.find('input').at(0).props().required).toEqual(true)
    expect(wrapper.find('input').at(1).props().required).toEqual(true)
    expect(wrapper.find('input').at(2).props().required).toEqual(true)
  });

  it("validates textarea inputs as not required", () => {;
    expect(wrapper.find('textarea').at(0).props().required).toBeUndefined()
  });
});
