using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace lorganic.EntityFrameworkCore
{
    public static class lorganicDbContextModelCreatingExtensions
    {
        public static void Configurelorganic(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(lorganicConsts.DbTablePrefix + "YourEntities", lorganicConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}