import { getImageUrl } from '@/lib/url';

type Props = React.ComponentProps<'img'>;

export const Image = ({ alt, src, ...props }: Props) => {
  const imageUrl = getImageUrl(src);

  return <img alt={alt} src={imageUrl} {...props} />;
};
