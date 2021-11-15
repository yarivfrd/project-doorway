<script>
    import { links } from "svelte-routing";
</script>

<main>
    <h1>מיזם המפתח</h1>
    <h2>"אני לא מצליח/ה להיכנס אל..."</h2>
    <div use:links class="option-container">
        <a class="option" href='website'>האתר</a>
        <a class="option" href='app'>האפליקציה</a>
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

    h2 {
        font-size: 2rem;
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