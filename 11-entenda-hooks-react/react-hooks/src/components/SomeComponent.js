import { forwardRef, useRef, useImperativeHandle } from "react";

const SomeComponent = forwardRef((props, ref) => {
  const componentInputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (componentInputRef.current.value.length > 3) {
          componentInputRef.current.value = "";
        }
      },
    };
  });

  return (
    <div>
      <p>Insira no máximo 3 caracteres</p>
      <input type="text" ref={componentInputRef} />
    </div>
  );
});

export default SomeComponent;
