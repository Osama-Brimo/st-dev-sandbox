import { getContext } from "../../../../extensions";

jQuery(async () => {
    try {
        console.log('FUUUUUUUCK!!!')
        console.log('[SANDBOX]: Extensions loaded!');
        console.log('[SANDBOX]: Context...', getContext());
    } catch (error) {
        console.error('[SANDBOX] ERROR:', error);
    }
});
