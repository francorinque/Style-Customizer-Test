import { useStyleCustomizerContext } from '../../hooks/useStyleCustomizer';

const inputField = 'flex flex-col gap-2 *:p-1 *:rounded-sm text-slate-950';
const spanStyles = 'font-semibold text-sm ';

const showme: boolean = import.meta.env.VITE_SHOW_ELEMENT === 'true';

const StyleCustomizer = () => {
  const context = useStyleCustomizerContext();

  return (
    showme && (
      <div
        className=' bg-neutral-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
        p-4 fixed left-0 bottom-0 z-10  h-screen  flex flex-col gap-4'
      >
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

        <label htmlFor='btnBgColor' className={inputField}>
          <span className={spanStyles}> Button Background</span>
          <input
            type='color'
            name='btnBgColor'
            id='btnBgColor'
            onChange={context?.handleButtonChange('bg')}
            value={context?.button?.bg}
          />
        </label>

        <label htmlFor='btnTextColor' className={inputField}>
          <span className={spanStyles}> Button Text Color</span>
          <input
            type='color'
            name='btnTextColor'
            id='btnTextColor'
            onChange={context?.handleButtonChange('text')}
            value={context?.button?.text}
          />
        </label>

        <hr className='bg-gray-400 h-[2px]' />

        {/* cards */}

        <label htmlFor='cardBgColor' className={inputField}>
          <span className={spanStyles}> Card Background</span>
          <input
            type='color'
            name='cardBgColor'
            id='cardBgColor'
            onChange={context?.handleCardChange('bg')}
            value={context?.card?.bg}
          />
        </label>

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
