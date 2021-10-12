import Enzyme from 'enzyme';
import ProductMetrics from '../components/ProductMetrics';

const { mount } = Enzyme;

const data = [
    {
      "id": 0,
      "name": "Janine Blondie",
      "email": "blondetiger11@gmail.com",
      "rating": 1,
      "comment": "Not a fan. Where are the headphones?",
      "dateObject": {
        "day": 11,
        "month": 10,
        "year": 2021
      }
    },
    {
      "id": 1,
      "name": "Romisha Shah",
      "email": "rommy211@hotmail.com",
      "rating": 2,
      "comment": "Not for me",
      "dateObject": {
        "day": 5,
        "month": 10,
        "year": 2021
      }
    },
    {
      "id": 2,
      "name": "Peggy Queen",
      "email": "jazzy@hotmail.com",
      "rating": 3,
      "comment": "I'm quite confused. Unsure of how I feel about the product...",
      "dateObject": {
        "day": 2,
        "month": 9,
        "year": 2021
      }
    },
    
]

describe('<ProductMetrics /> component', () => {
  const wrapper = mount(<ProductMetrics commentArray={data}/>);

  test('ProductMetrics graphs have correct ids', () => {
    expect(wrapper.find('#bar-chart')).toHaveLength(1);
    expect(wrapper.find('#line-chart')).toHaveLength(1);
});

  test('ProductMetrics has correct number of figures and captions', () => {
    expect(wrapper.find('figure')).toHaveLength(2);
    expect(wrapper.find('figcaption')).toHaveLength(2);
  });

  test('ProductMetrics bar graph shows correct title for data above', () => {
    expect(wrapper.find('figcaption').at(0).text()).toEqual('3 Total Ratings');
  });

  test('ProductMetrics line graph shows correct title for data above', () => {
    expect(wrapper.find('figcaption').at(1).text()).toEqual('Review Trend for Current Year: 2021');
  });
});
