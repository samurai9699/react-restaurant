import React from 'react';

import { SubHeading } from '../../components';
import{images} from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
       <SubHeading title='Chase the new flavour' />
       <h1 className='app__header-h1'>The key to Fine dining</h1>
       <p className='p__opensans ' style={{margin: '2rem 0'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque optio officiis sed, quisquam labore dolores totam animi est nam recusandae, ab veniam accusantium ut maiores.</p>
       <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>

  </div>
);

export default Header;
