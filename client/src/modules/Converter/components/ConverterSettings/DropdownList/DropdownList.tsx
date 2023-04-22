import {
  VIDEO_FORMAT,
  VIDEO_QUALITY,
  VIDEO_FPS,
  VIDEO_SOUND,
} from '../../../constants/video';

import { useActions } from '@hooks/useActions';

import { Accordion } from '@ui/Accordion/Accordion';
import { Dropdown } from '@ui/Dropdown/Dropdown';
import { DropdownItem } from '@ui/Dropdown/DropdownItem';

import styles from './DropdownList.module.scss';

export const DropdownList = () => {
  const { changeFormat, changeFps, changeQuality, changeAudio } = useActions();

  return (
    <>
      <Dropdown label="Формат" onChange={(item) => changeFormat(item)}>
        {VIDEO_FORMAT.map((item) => (
          <DropdownItem key={item.value} value={item.value}>
            {item.label}
          </DropdownItem>
        ))}
      </Dropdown>

      <Dropdown label="Качество" onChange={(item) => changeQuality(item)}>
        {VIDEO_QUALITY.map((item) => (
          <DropdownItem key={item.value} value={item.value}>
            {item.label}
          </DropdownItem>
        ))}
      </Dropdown>

      <Accordion title="Дополнительные настройки">
        <div className={styles.container}>
          <Dropdown
            label="Кадры в секунду (FPS)"
            onChange={(item) => changeFps(item)}
          >
            {VIDEO_FPS.map((item) => (
              <DropdownItem key={item.value} value={item.value}>
                {item.label}
              </DropdownItem>
            ))}
          </Dropdown>

          <Dropdown label="Аудиоканал" onChange={(item) => changeAudio(item)}>
            {VIDEO_SOUND.map((item) => (
              <DropdownItem key={item.value} value={item.value}>
                {item.label}
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
      </Accordion>
    </>
  );
};
