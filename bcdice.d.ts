declare module 'bcdice-js' {
    type BCDiceResult = [string, boolean]
    type GameName = string
    type GameType = string
    type DiceBotDescription = [string, GameName, GameType]

    export default class BCDice {
        constructor()

        isKeepSecretDice(b: boolean): void
        getGameType(): GameType
        setDiceBot(diceBot: DiceBot): void
        setMessage(message: string): void
        diceCommand(): BCDiceResult
        setCollectRandResult(b: boolean): void
        getRandResults(): [number, number][]
        setGameByTitle(gameTitle: string): string
        setTest(isTest: boolean): void
        setRandomValues(rands: any): void
    }

    export class DiceBot {
        gameName(): GameName
        gameType(): GameType
        postSet(): void
        getHelpMessage(): string
        info(): DiceBotInfo
    }

    interface DiceBotInfo {
        prefixes: string[],
        name: string,
        gameType: string
        info: string,
    }

    export class DiceBotLoader {
        static loadUnknownGame(gameTitle: GameName): DiceBot | Promise<DiceBot>
        static collectDiceBotDescriptions(): (DiceBotInfo | Promise<DiceBotInfo>)[]
        static collectDiceBots(): (DiceBot | Promise<DiceBot>)[]
        match(): void
        loadDiceBot(): DiceBot | Promise<DiceBot>
    }

    export class DiceBotLoaderList {
        static find(gameTitle: GameName): DiceBotLoader | null
    }

    export class DiceBotResolver {
        static setCustomLoader(loader: (name: string) => (any|Promise<any>), async: boolean): void
    }
}

