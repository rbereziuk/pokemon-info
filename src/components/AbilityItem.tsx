import { usePokemonAbilityQuery } from '../api/pokemonApi';

interface Props {
  name: string;
}

export const AbilityItem: React.FC<Props> = ({ name }) => {
  const {
    data: ability,
    isLoading,
    isUninitialized,
    isError,
  } = usePokemonAbilityQuery({ name });

  if (isUninitialized || isLoading) return 'Loading...';
  if (isError) return 'Something went wrong!';

  const { name: nameTranslated } = ability.names.find(
    (name) => name.language.name === 'en'
  );

  return <li>{nameTranslated}</li>;
};
