import { ArrowRightAlt } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { Link } from '../Link';

type Props = React.ComponentPropsWithoutRef<typeof Link>;

export const LinkButton = ({ children, ...props }: Props) => {
  return (
    <Link {...props}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography component="span" fontWeight={600}>
          {children}
        </Typography>
        <ArrowRightAlt fontSize="small" />
      </Stack>
    </Link>
  );
};
