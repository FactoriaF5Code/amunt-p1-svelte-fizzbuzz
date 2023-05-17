<script>
    import NumberCard from './lib/Card.svelte'

    let numbers = [...Array(100).keys()].slice(1)

</script>

<div>
    {#each numbers as number}
        <NumberCard {number}/>
    {/each}
</div>

<style>
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
</style>