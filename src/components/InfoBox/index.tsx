import * as S from './styles';

type Props = {
  title: string;
  subtitle: string;
  variant: 'full' | 'half';
  type?: 'GOOD' | 'BAD';
};

export function InfoBox({ title, subtitle, variant = 'full', type = 'GOOD' }: Props) {
  return (
    <S.Container variant={variant} type={type}>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Content>
    </S.Container>
  );
}
