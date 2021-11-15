<script>    
    import labels from '../labels';
    export let params;
    console.log(params);
</script>

<main>
    <h1>{labels[params.solution]}</h1>
    <p> תיאור פתרון תיאור פתרון תיאור פתרון תיאור פתרון תיאור פתרון
        תיאור פתרון תיאור פתרון תיאור פתרון תיאור פתרון תיאור פתרון תיאור פתרון תיאור פתרון תיאור פתרון תיאור פתרון תיאור פתרון
    </p>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    p {
        max-width: 450px;
        padding: 10px;
        background-color: #f5e2d1;
    }
</style>