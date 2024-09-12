export default defineNuxtPlugin(async => {
    const tockenValue = useCookie('tockenValue', {default: () => false, maxAge: 604800});

    const colorMode = useCookie('theme', {
        default: () => 'dark',
        maxAge: 60 * 60 * 24 * 365 * 2
    });

    return {
        provide: {
            storage: {
                tockenValue,
                colorMode
            }
        }
    }
})