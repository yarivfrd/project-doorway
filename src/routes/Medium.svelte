<script>
    import { links } from "svelte-routing";

    export let params;
</script>

<main>
    <h1>למה?</h1>
    <div use:links class="option-container">
        <a class="option" href={`${params.medium}/problem a`}>שכחתי את שם המשתמש</a>
        <a class="option" href={`${params.medium}/problem b`}>שכחתי את הסיסמה</a>
        <a class="option" href={`${params.medium}/problem c`}>לא יודע איך</a>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    h1 {
        margin-bottom: 50px;
    }

    .option-container {
        width: 300px;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .option {
        border: solid 5px;
        border-radius: 5px;
        padding: 5px 10px;
        margin-bottom: 20px;
        transition: all ease 0.3s;
    }

    .option:last-child {
        margin-bottom: 0;
    }
</style>