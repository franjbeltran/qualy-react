import '@testing-library/jest-dom';
import { cleanup, fireEvent, getByTestId, render, RenderResult, screen } from '@testing-library/react';
import { GameCard } from '../gameCard.component';
import { Game as GameType} from '../gameCard.type';

describe('GameCard component', () => {
    afterEach(cleanup);

    it('renders the component with all properties', () => {
        // Given
        const props: GameType = {
            id: '1',
            name: 'Test',
            image: 'test'
        };

        // When
        const { container }: RenderResult = render(<GameCard {...props} />);

        // Then
        expect(container).toMatchSnapshot();
        expect(screen.getByText(props.name)).toBeInTheDocument();
        expect(screen.getByTestId('card-media')).toBeInTheDocument();
    });

    it('calls handleGame function', () => {
        // Given
        const props: GameType = {
            id: '1',
            name: 'Test',
            image: 'test',
            handleClick: jest.fn()
        };

        // When
        render(<GameCard {...props} />);
        fireEvent.click(screen.getByTestId('button-game'));

        // Then
        expect(props.handleClick).toHaveBeenCalledTimes(1);
    });
});