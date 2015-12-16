import Component from './component';
import Div from './div';
import css from './_css';

class NavbarNav extends Component{
  init({cssClass, children}){
    this.cssClass = cssClass;
    this.children = children;
  }

  get divCssClass(){
    return css.for(this.cssClass, 'nav navbar-nav');
  }
}

NavbarNav.tpl = [Div, {
  cssClass: '= divCssClass',
  children: '= children'
}];

export default NavbarNav;