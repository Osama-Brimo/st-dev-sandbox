async function importFromScript(what) {
    const module = await import(/* webpackIgnore: true */'../../../../extensions.js');
    return module[what];
}

const getContext = await importFromScript('getContext');

jQuery(async () => {
    try {
        console.log('FUUUUUUUCK!!!')
        console.log('[SANDBOX]: Extensions loaded!');
        console.log('[SANDBOX]: Context...', getContext());
    } catch (error) {
        console.error('[SANDBOX] ERROR:', error);
    }
});

export {};
