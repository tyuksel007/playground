import React from 'react'
import Link from '../link/Link';
import './menu.scss';

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && ' active')}>
        <ul>
            <Link setMenuOpen={setMenuOpen} href={'#intro'} description='Home'/>
            <Link setMenuOpen={setMenuOpen} href={'#portfolio'} description='Portfolio'/>
            <Link setMenuOpen={setMenuOpen} href={'#works'} description='Works'/>
            <Link setMenuOpen={setMenuOpen} href={'#testimonials'} description='Testimonials'/>
            <Link setMenuOpen={setMenuOpen} href={'#contact'} description='Contact'/>
        </ul>
    </div>
  )
}
