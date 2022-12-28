import { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

const sourceHandleStyleA: CSSProperties = { left: 25 };
const sourceHandleStyleB: CSSProperties = {
  right: 25,
  left: 'auto',
};

const LogicANDNode: FC<NodeProps> = ({ data, xPos, yPos }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        id="a"
        style={sourceHandleStyleA}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="b"
        style={sourceHandleStyleB}
      />

      <div>{data.label}</div>

      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default memo(LogicANDNode);
