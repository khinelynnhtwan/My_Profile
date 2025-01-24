/* eslint-disable react/prop-types */

function UseButton(props){
  return (
    <>
      <button style={{background: props.color, text: props.color}} className="text-[#9A9A9A] font-medium bg-[#1C1C21] hover:bg-[#17171b] active:scale-90 duration-100 py-3 px-10 rounded-full border-2 border-[#222229]">
        {props.text}
      </button>
    </>
  );
};


export default UseButton;