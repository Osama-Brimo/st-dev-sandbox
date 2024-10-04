import { getContext } from "@sillytavern/extensions";
import { anothertCtx } from "./utils/test-thing";
import { SlashCommandEnumValue } from "@sillytavern/slash-commands/SlashCommandEnumValue";

jQuery(async () => {
    try {
        console.log('FUUUUUUUCK!!!')
        console.log('[SANDBOX]: Extensions loaded!');
        console.log('[SANDBOX]: Context...', getContext());
        console.log(anothertCtx, 'another ctx from index.ts');
        console.log(SlashCommandEnumValue, 'slash command enum value...');
    } catch (error) {
        console.error('[SANDBOX] ERROR:', error);
    }
});
