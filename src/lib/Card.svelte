<script>
    export let number;
    $: isMultipleOf3 = number % 3 === 0;
    $: isMultipleOf5 = number % 5 === 0;
</script>

<div class:fizz="{isMultipleOf3}"
     class:buzz="{isMultipleOf5}">
    <h1>{number}</h1>
    {#if isMultipleOf3}
        <span>Fizz</span>
    {/if}
    {#if isMultipleOf5}
        <span>Buzz</span>
    {/if}
</div>

<style>
    div {
        background-color: #646cff;
        width: 200px;
        margin: 10px;
        padding: 20px;
        border-radius: 3px;
        box-shadow: 5px 5px 2px 0 rgba(168, 70, 168, 1);
        font-weight: bolder;
        font-size: large;
    }

    div:hover {
        transform: translate(1px, 1px);
    }

    div.fizz {
        background-color: #9ed6ff;
        color: #213547;
    }

    div.buzz {
        background-color: #213547;
    }

    div.fizz.buzz {
        background-color: #ff606d;
    }

</style>