<h3 bind:this={element} use:useActions={use} use:forwardEvents {...$$restProps}>
  <slot />
</h3>

<script lang="ts">
  import { get_current_component } from 'svelte/internal';

  import type { ActionArray } from '../internal/useActions.js';
  import { forwardEventsBuilder, useActions } from '../internal/index.js';

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];

  const forwardEvents = forwardEventsBuilder(get_current_component());

  let element: HTMLHeadingElement;

  export function getElement() {
    return element;
  }
</script>
