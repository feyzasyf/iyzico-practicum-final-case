import React from 'react';

const Highlighted = ({text = '', highlight = '', className}) => {
  const escapeRegExp = (str = '') => (
    str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
  );
  
  
  if (!highlight.trim()) {
      return <span>{text}</span>
    }
    const regex = new RegExp(`(${escapeRegExp(highlight)})`, 'gi')
    const parts = text.split(regex)
    return (
      <span className={className}>
         {parts.filter(part => part).map((part, i) => (
             regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
         ))}
     </span>
    )
 };

 export default Highlighted;