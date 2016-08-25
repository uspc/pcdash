import React from 'react';
import {DragSource,DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import {compose} from 'redux';



const Note = ({
    connectDragSource, connectDropTarget,isDragging,isOver,onMove,id, children, ...props
    }) => {
  return compose(connectDragSource,connectDropTarget)(
      <div style={{opacity: isDragging || isOver ? 0 : 1}} {...props}>
        {children}
      </div>
  );
};

const noteSource = {
  beginDrag(props) {
    console.log('begin dragging note', props);
    return {
        id: props.id
    };
  }
};

const noteTarget = {
    hover(targetProps,monitor){
        const sourceProps = monitor.getItem();
        const targetId = targetProps.id;
        const sourceId = sourceProps.id;

        if(sourceId !== targetId){
            targetProps.onMove({sourceId, targetId})
        }
    }
};

export default compose(
    DragSource(ItemTypes.NOTE,noteSource,(connect,monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    })),
    DropTarget(ItemTypes.NOTE,noteTarget,(connect,monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }))
)(Note)