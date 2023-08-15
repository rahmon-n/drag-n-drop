import CertificateSolid from '../assets/icons/certificate-solid';
import CircleSolid from '../assets/icons/circle-solid';
import PlaySolid from '../assets/icons/play-solid';
import SquareSolid from '../assets/icons/square-solid';
import StarSolid from '../assets/icons/star-solid';

export const SHAPE_TYPES = {
  circle: 'circle',
  certificate: 'certificate',
  square: 'square',
  star: 'star',
  play: 'play',
};

export const shapesObject = {
  [SHAPE_TYPES.circle]: <CircleSolid />,
  [SHAPE_TYPES.certificate]: <CertificateSolid />,
  [SHAPE_TYPES.square]: <SquareSolid />,
  [SHAPE_TYPES.star]: <StarSolid />,
  [SHAPE_TYPES.play]: <PlaySolid />,
};
