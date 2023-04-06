import * as Styled from './ChatIcon.style'

const ChatIcon = () => {
  return (
    <Styled.IconContainer>
      <Styled.ChatIcon>
        <div className='r2d2'>
          <div className='head'>
            <div className='eye'>
              <div className='circle-1'>
                <div className='circle-2'></div>
                <div className='circle-3'></div>
              </div>
            </div>
            <div className='list1'>
              <div className='item'></div>
              <div className='item'></div>
              <div className='item'></div>
              <div className='item'>
                <div className='circle'></div>
              </div>
              <div className='item'></div>
            </div>
          </div>
          <div className='body2'>
            <div className='list2'>
              <div className='item2'></div>
              <div className='item2'></div>
              <div className='item2'></div>
            </div>
            <div className='oval'></div>
          </div>
          <div className='arm-1'>
            <div className='divisor'></div>
          </div>
          <div className='arm-2'>
            <div className='divisor'></div>
          </div>
          <div className='leg'></div>
          <div className='shadow'></div>
        </div>
      </Styled.ChatIcon>
    </Styled.IconContainer>
  );
};

export default ChatIcon;