import { useState } from 'react';
import { useStyleCustomizerContext } from '../../hooks/useStyleCustomizer';

const inputField = 'flex flex-col gap-2 *:p-1 *:rounded-sm text-slate-950';
const spanStyles = 'font-semibold text-sm ';

const showme: boolean = import.meta.env.VITE_SHOW_ELEMENT === 'true';

const StyleCustomizer = () => {
  const context = useStyleCustomizerContext();

  const [position, setPosition] = useState('left-0');

  const handlePositionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPosition(event.target.value);
  };

  return (
    showme && (
      <div
        className={`
           bg-gray-400  rounded-md  border border-gray-100
           p-8 fixed  bottom-0 z-10  h-screen  flex flex-col gap-4 overflow-y-auto ${position}
          `}
      >
        <label htmlFor='position' className={inputField}>
          <span className={spanStyles}>TOOL POSITION</span>
          <select
            name='position'
            id='position'
            onChange={handlePositionChange}
            value={position}
          >
            <option value='left-0'>Left</option>
            <option value='right-0'>Right</option>
          </select>
        </label>
        {/* texts */}
        <label htmlFor='mainTtitleFontSize' className={inputField}>
          <span className={spanStyles}>Main Title Font Size</span>
          <select
            name='mainTitleFontSize'
            id='mainTitleFontSize'
            value={context?.mainTitle.fontSize}
            onChange={context?.handleMainTitleChange('fontSize')}
          >
            <option value='lg:text-xl'>xl</option>
            <option value='lg:text-lg'>lg</option>
            <option value='lg:text-2xl'>2xl</option>
            <option value='lg:text-3xl'>3xl</option>
            <option value='lg:text-4xl'>4xl</option>
            <option value='lg:text-5xl'>5xl</option>
            <option value='lg:text-6xl'>6xl</option>
            <option value='lg:text-7xl'>7xl</option>
          </select>
        </label>
        <label htmlFor='titleFontSize' className={inputField}>
          <span className={spanStyles}>Title Font Size</span>
          <select
            name='titleFontSize'
            id='titleFontSize'
            value={context?.title.fontSize}
            onChange={context?.handleTitleChange('fontSize')}
          >
            <option value='lg:text-xl'>xl</option>
            <option value='lg:text-lg'>lg</option>
            <option value='lg:text-2xl'>2xl</option>
            <option value='lg:text-3xl'>3xl</option>
            <option value='lg:text-4xl'>4xl</option>
            <option value='lg:text-5xl'>5xl</option>
            <option value='lg:text-6xl'>6xl</option>
            <option value='lg:text-7xl'>7xl</option>
          </select>
        </label>

        <label htmlFor='primaryColor' className={inputField}>
          <span className={spanStyles}>Primary Color</span>
          <input
            type='color'
            name='primaryColor'
            id='primaryColor'
            value={context?.colors.primaryColor}
            onChange={context?.handleColorChange('primaryColor')}
          />
        </label>
        <label htmlFor='secondaryColor' className={inputField}>
          <span className={spanStyles}>Secondary Color</span>
          <input
            type='color'
            name='secondaryColor'
            id='secondaryColor'
            value={context?.colors.secondaryColor}
            onChange={context?.handleColorChange('secondaryColor')}
          />
        </label>
        <label htmlFor='sectionColor' className={inputField}>
          <span className={spanStyles}>Section Color</span>
          <input
            type='color'
            name='sectionColor'
            id='sectionColor'
            value={context?.colors.sectionColor}
            onChange={context?.handleColorChange('sectionColor')}
          />
        </label>

        <label htmlFor='paragraphColor' className={inputField}>
          <span className={spanStyles}>Paragraph Color</span>
          <input
            type='color'
            name='paragraphColor'
            id='paragraphColor'
            value={context?.colors.paragraphColor}
            onChange={context?.handleColorChange('paragraphColor')}
          />
        </label>

        {/* buttons */}
        <label htmlFor='btnTextColor' className={inputField}>
          <span className={spanStyles}>Button Text Color</span>
          <input
            type='color'
            name='btnTextColor'
            id='btnTextColor'
            onChange={context?.handleButtonChange('btnTextColor')}
            value={context?.button.btnTextColor}
          />
        </label>

        <label htmlFor='btnPaddingX' className={inputField}>
          <span className={spanStyles}> Button Padding X</span>
          <select
            name='btnPaddingX'
            id='btnPaddingX'
            onChange={context?.handleButtonChange('paddingX')}
            value={context?.button.paddingX}
          >
            <option value='px-1'>px-1</option>
            <option value='px-2'>px-2</option>
            <option value='px-3'>px-3</option>
            <option value='px-4'>px-4</option>
            <option value='px-5'>px-5</option>
            <option value='px-6'>px-6</option>
            <option value='px-7'>px-7</option>
            <option value='px-8'>px-8</option>
            <option value='px-9'>px-9</option>
            <option value='px-10'>px-10</option>
            <option value='px-11'>px-11</option>
            <option value='px-12'>px-12</option>
            <option value='px-14'>px-14</option>
          </select>
        </label>

        <label htmlFor='btnPaddingY' className={inputField}>
          <span className={spanStyles}> Button Padding Y</span>
          <select
            name='btnPaddingY'
            id='btnPaddingY'
            onChange={context?.handleButtonChange('paddingY')}
            value={context?.button.paddingY}
          >
            <option value='py-1'>py-1</option>
            <option value='py-2'>py-2</option>
            <option value='py-3'>py-3</option>
            <option value='py-4'>py-4</option>
            <option value='py-5'>py-5</option>
            <option value='py-6'>py-6</option>
            <option value='py-7'>py-7</option>
            <option value='py-8'>py-8</option>
            <option value='py-9'>py-9</option>
            <option value='py-10'>py-10</option>
            <option value='py-11'>py-11</option>
            <option value='py-12'>py-12</option>
            <option value='py-14'>py-14</option>
          </select>
        </label>

        <label htmlFor='btnRadius' className={inputField}>
          <span className={spanStyles}> Button Border-Radius</span>
          <select
            name='btnRadius'
            id='btnRadius'
            onChange={context?.handleButtonChange('radius')}
          >
            <option value='rounded-sm'>rounded-sm</option>
            <option value='rounded-md'>rounded-md</option>
            <option value='rounded-lg'>rounded-lg</option>
            <option value='rounded-xl'>rounded-xl</option>
            <option value='rounded-2xl'>rounded-2xl</option>
            <option value='rounded-3xl'>rounded-3xl</option>
            <option value='rounded-full'>rounded-full</option>
          </select>
        </label>

        {/* cards */}

        <label htmlFor='cardRadius' className={inputField}>
          <span className={spanStyles}> Card Border-Radius</span>
          <select
            name='cardRadius'
            id='cardRadius'
            onChange={context?.handleCardChange('radius')}
          >
            <option value='rounded-sm'>rounded-sm</option>
            <option value='rounded-md'>rounded-md</option>
            <option value='rounded-lg'>rounded-lg</option>
            <option value='rounded-xl'>rounded-xl</option>
            <option value='rounded-2xl'>rounded-2xl</option>
            <option value='rounded-3xl'>rounded-3xl</option>
            <option value='rounded-full'>rounded-full</option>
          </select>
        </label>
      </div>
    )
  );
};
export default StyleCustomizer;
