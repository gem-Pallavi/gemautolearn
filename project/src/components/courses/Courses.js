import { right } from '@popperjs/core';
import '../../css/courses/courses.css';
import Footer from '../Footer';
import Navigation from '../Navigation';
import { Switch } from 'antd';
import { Input, Space } from 'antd';

export default function Courses() {
  const toggleView = () => {
    console.log('view changed');
  };

  const onSearch = () => {
    console.log('Searched');
  };

  const { Search } = Input;

  return (
    <>
    <Navigation />
    <div className='row view-search'>
      <Switch
        className='toggle-courses'
        onChange={toggleView}
      />
      <Search
        className='search-course'
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
      />
    </div>
    <Footer />
    </>
  )
}
